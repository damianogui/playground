import { useState, useRef } from 'react';
import { Upload, Play, ArrowLeft, Check, X } from 'lucide-react';
import { SideMenu } from './SideMenu';

interface QuizImage {
  id: string;
  url: string;
  label: string;
  file: File;
}

type GameState = 'setup' | 'playing' | 'results';

export function NopeQuiz() {
  const [images, setImages] = useState<QuizImage[]>([]);
  const [gameState, setGameState] = useState<GameState>('setup');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [previousImageIndex, setPreviousImageIndex] = useState<number | null>(
    null
  );
  const [options, setOptions] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [totalQuestions, setTotalQuestions] = useState(10);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Audio feedback functions
  const playCorrectSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const now = audioContext.currentTime;

    // Create a pleasant ascending tone
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(523.25, now); // C5
    oscillator.frequency.setValueAtTime(659.25, now + 0.1); // E5
    oscillator.frequency.setValueAtTime(783.99, now + 0.2); // G5

    gainNode.gain.setValueAtTime(0.3, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

    oscillator.start(now);
    oscillator.stop(now + 0.4);
  };

  const playIncorrectSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const now = audioContext.currentTime;

    // Create a descending buzz
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.type = 'sawtooth';
    oscillator.frequency.setValueAtTime(200, now);
    oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.3);

    gainNode.gain.setValueAtTime(0.2, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

    oscillator.start(now);
    oscillator.stop(now + 0.3);
  };

  const playCompletionSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const now = audioContext.currentTime;

    // Create a celebration sound - ascending notes
    const frequencies = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    
    frequencies.forEach((freq, index) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(freq, now + index * 0.1);

      gainNode.gain.setValueAtTime(0.2, now + index * 0.1);
      gainNode.gain.exponentialRampToValueAtTime(0.01, now + index * 0.1 + 0.3);

      oscillator.start(now + index * 0.1);
      oscillator.stop(now + index * 0.1 + 0.3);
    });
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newImages: QuizImage[] = [];
    Array.from(files).forEach((file) => {
      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        newImages.push({
          id: Math.random().toString(36).substring(7),
          url,
          label: file.name.replace(/\.[^/.]+$/, ''), // Remove file extension
          file,
        });
      }
    });

    setImages((prev) => [...prev, ...newImages]);
  };

  const handleLabelChange = (id: string, newLabel: string) => {
    setImages((prev) =>
      prev.map((img) => (img.id === id ? { ...img, label: newLabel } : img))
    );
  };

  const handleDeleteImage = (id: string) => {
    setImages((prev) => {
      const filtered = prev.filter((img) => img.id !== id);
      // Revoke object URL to prevent memory leaks
      const imgToDelete = prev.find((img) => img.id === id);
      if (imgToDelete) {
        URL.revokeObjectURL(imgToDelete.url);
      }
      return filtered;
    });
  };

  const startQuiz = () => {
    if (images.length < 3) {
      alert('Please upload at least 3 images to start the quiz!');
      return;
    }
    // Reset quiz state
    setCurrentQuestionNumber(1);
    setCorrectAnswers(0);
    setIncorrectAnswers(0);
    setPreviousImageIndex(null);
    setGameState('playing');
    loadNextQuestion();
  };

  const loadNextQuestion = () => {
    setFeedback(null);
    // Pick a random image, but avoid the previous one
    let randomIndex: number;
    if (images.length === 1) {
      randomIndex = 0;
    } else {
      do {
        randomIndex = Math.floor(Math.random() * images.length);
      } while (randomIndex === previousImageIndex);
    }

    setPreviousImageIndex(randomIndex);
    setCurrentImageIndex(randomIndex);

    // Generate 3 options: 1 correct + 2 random incorrect
    const correctLabel = images[randomIndex].label;
    const incorrectLabels = images
      .filter((_, idx) => idx !== randomIndex)
      .map((img) => img.label);

    // Shuffle and pick 2 random incorrect options
    const shuffled = incorrectLabels.sort(() => Math.random() - 0.5);
    const incorrectOptions = shuffled.slice(0, 2);

    // Combine and shuffle all options
    const allOptions = [correctLabel, ...incorrectOptions].sort(
      () => Math.random() - 0.5
    );
    setOptions(allOptions);
  };

  const handleOptionClick = (selectedLabel: string) => {
    const correctLabel = images[currentImageIndex].label;
    if (selectedLabel === correctLabel) {
      setFeedback('correct');
      setCorrectAnswers((prev) => prev + 1);
      playCorrectSound();
      setTimeout(() => {
        if (currentQuestionNumber < totalQuestions) {
          setCurrentQuestionNumber((prev) => prev + 1);
          loadNextQuestion();
        } else {
          setGameState('results');
          playCompletionSound();
        }
      }, 1000);
    } else {
      setFeedback('incorrect');
      setIncorrectAnswers((prev) => prev + 1);
      playIncorrectSound();
      setTimeout(() => {
        setFeedback(null);
      }, 1000);
    }
  };

  const backToSetup = () => {
    setGameState('setup');
    setFeedback(null);
  };

  if (gameState === 'playing') {
    return (
      <>
        <SideMenu currentTool="quiz" />
        <div className="w-full max-w-6xl mx-auto p-4 md:p-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 style={{ fontSize: '40px', lineHeight: '60px', fontWeight: 700 }}>Nope Quiz</h1>
            <p className="small-text opacity-60 mt-2">by nope.design</p>
          </div>

          <div className="bg-card rounded-[var(--radius-card)] border-[3px] border-border p-6 md:p-10">
            {/* Back Button */}
            <div className="flex items-start mb-4">
              <button
                onClick={backToSetup}
                className="flex items-center gap-2 px-4 py-2 bg-background rounded-[var(--radius-button)] border-[3px] border-border hover:bg-muted transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back</span>
              </button>
            </div>

            {/* Question Counter */}
            <div className="mb-8 text-center">
              <div className="inline-block px-6 py-3 bg-card rounded-[var(--radius-card)]">
                <p className="small-text text-muted-foreground">
                  Question {currentQuestionNumber} / {totalQuestions}
                </p>
              </div>
            </div>

            {/* Quiz Content - Image Left, Options Right on Desktop */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              {/* Image Display */}
              <div className="flex-shrink-0 md:w-1/2 flex justify-center items-start">
                <div className="relative border-[3px] border-border rounded-[var(--radius-card)] overflow-hidden bg-background w-full">
                  <img
                    src={images[currentImageIndex].url}
                    alt="Quiz question"
                    className="w-full h-auto object-contain"
                    style={{ maxHeight: '500px' }}
                  />
                </div>
              </div>

              {/* Options */}
              <div className="flex-1 flex flex-col justify-center space-y-4">
                {options.map((option, idx) => {
                  const isCorrect =
                    option === images[currentImageIndex].label &&
                    feedback === 'correct';
                  const isIncorrect =
                    option !== images[currentImageIndex].label &&
                    feedback === 'incorrect';

                  return (
                    <button
                      key={idx}
                      onClick={() => handleOptionClick(option)}
                      disabled={feedback !== null}
                      className={`w-full p-4 rounded-[var(--radius-button)] border-[3px] border-border transition-all ${
                        isCorrect
                          ? 'bg-secondary border-secondary'
                          : isIncorrect
                          ? 'bg-destructive border-destructive'
                          : 'bg-card hover:bg-background'
                      } ${feedback !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {isCorrect && <Check className="w-6 h-6" />}
                        {isIncorrect && <X className="w-6 h-6" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (gameState === 'results') {
    return (
      <>
        <SideMenu currentTool="quiz" />
        <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 style={{ fontSize: '40px', lineHeight: '60px', fontWeight: 700 }}>Nope Quiz</h1>
            <p className="small-text opacity-60 mt-2">by nope.design</p>
          </div>

          <div className="bg-card rounded-[var(--radius-card)] border-[3px] border-border p-6 md:p-10">
            {/* Results Title */}
            <div className="mb-8 text-center">
              <h2>Quiz Complete!</h2>
            </div>

            {/* Results Section */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-background rounded-[var(--radius-card)] border-[3px] border-border p-6 text-center">
                  <p className="mb-2">Total Questions</p>
                  <h2>{totalQuestions}</h2>
                </div>
                <div className="bg-secondary rounded-[var(--radius-card)] border-[3px] border-border p-6 text-center">
                  <p className="mb-2">Correct Answers</p>
                  <h2>{correctAnswers}</h2>
                </div>
                <div className="bg-background rounded-[var(--radius-card)] border-[3px] border-border p-6 text-center">
                  <p className="mb-2">Incorrect Answers</p>
                  <h2>{incorrectAnswers}</h2>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={startQuiz}
                className="w-full p-6 bg-primary text-primary-foreground rounded-[var(--radius-button)] border-[3px] border-border hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
              >
                <Play className="w-6 h-6" />
                <span>Try Again</span>
              </button>
              <button
                onClick={backToSetup}
                className="w-full p-4 bg-background rounded-[var(--radius-button)] border-[3px] border-border hover:bg-muted transition-colors flex items-center justify-center gap-3"
              >
                <ArrowLeft className="w-6 h-6" />
                <span>Back to Setup</span>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SideMenu currentTool="quiz" />
      <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 style={{ fontSize: '40px', lineHeight: '60px', fontWeight: 700 }}>Nope Quiz</h1>
          <p className="small-text opacity-60 mt-2">by nope.design</p>
        </div>

        <div className="bg-card rounded-[var(--radius-card)] border-[3px] border-border p-6 md:p-10">
          {/* Upload Section */}
          <div className="mb-8">
            <p className="small-text text-muted-foreground mb-3 text-center opacity-50">
              Upload the images to use for your quiz. Image names will be used as default descriptions. All images will be discarded after the quiz.
            </p>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/*"
              multiple
              className="hidden"
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="w-full p-6 bg-secondary rounded-[40px] border-[2.767px] border-border hover:bg-accent transition-colors flex items-center justify-center gap-3"
              style={{ height: '77.5px', fontSize: '16px', fontWeight: 700 }}
            >
              <Upload className="w-6 h-6" />
              <span>Upload Images</span>
            </button>
          </div>

          {/* Total Questions Input */}
          {images.length >= 3 && (
            <div className="mb-8">
              <label className="block mb-2" style={{ fontSize: '16px', fontWeight: 400 }}>Number of Questions</label>
              <input
                type="number"
                min="1"
                max="100"
                value={totalQuestions}
                onChange={(e) =>
                  setTotalQuestions(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-full px-4 py-3 bg-input-background border-[2.767px] border-border rounded-[var(--radius-input)] focus:outline-none focus:ring-2 focus:ring-ring"
                style={{ height: '53.5px', fontSize: '16px' }}
              />
            </div>
          )}

          {/* Images Grid */}
          {images.length > 0 && (
            <div className="mb-8">
              <h3 className="mb-4" style={{ fontSize: '16px', fontWeight: 400 }}>Your Images ({images.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {images.map((img) => (
                  <div
                    key={img.id}
                    className="bg-background rounded-[var(--radius-card)] border-[2.767px] border-border p-[18.764px]"
                  >
                    <div className="mb-3 border-[2.767px] border-border rounded-[var(--radius-card)] overflow-hidden">
                      <img
                        src={img.url}
                        alt={img.label}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <input
                        type="text"
                        value={img.label}
                        onChange={(e) => handleLabelChange(img.id, e.target.value)}
                        className="w-full px-3 py-2 bg-input-background border-[2.767px] border-border rounded-[var(--radius-input)] focus:outline-none focus:ring-2 focus:ring-ring opacity-50 focus:opacity-100 focus:bg-card"
                        placeholder="Enter label"
                        style={{ height: '45.5px', fontSize: '16px' }}
                      />
                      <button
                        onClick={() => handleDeleteImage(img.id)}
                        className="w-full px-3 py-2 bg-background rounded-[30px] border-[2.767px] border-border hover:bg-muted transition-colors"
                        style={{ height: '45.5px', fontSize: '16px', fontWeight: 400 }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Start Button */}
          {images.length >= 3 && (
            <button
              onClick={startQuiz}
              className="w-full bg-primary text-primary-foreground rounded-[40px] border-[1.383px] border-primary hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
              style={{ 
                height: '78px', 
                fontSize: '16px', 
                fontWeight: 700,
                boxShadow: 'var(--elevation-sm)'
              }}
            >
              <Play className="w-6 h-6" />
              <span>Start</span>
            </button>
          )}

          {images.length > 0 && images.length < 3 && (
            <div className="text-center p-4 bg-background rounded-[var(--radius-card)] border-[2.767px] border-border">
              <p style={{ fontSize: '16px' }}>Upload at least 3 images to start the quiz</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}