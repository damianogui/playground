import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

export function TimeTimer() {
  const [totalMinutes, setTotalMinutes] = useState(25); // 25 minutes default
  const [remainingSeconds, setRemainingSeconds] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isEditingTime, setIsEditingTime] = useState(false);
  const [editValue, setEditValue] = useState('25:00');
  const [showTimesUp, setShowTimesUp] = useState(false);
  const [splits, setSplits] = useState(1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const previousSplitIndexRef = useRef<number>(0);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  // Play alarm sound using Web Audio API - plays 3 times
  const playAlarmSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create a ringing sound with multiple beeps - 3 beeps, repeated 3 times
    const beepCount = 3;
    const beepDuration = 0.3;
    const beepGap = 0.1;
    const sequenceGap = 0.5; // Gap between sequences
    const repeatCount = 3; // Play the sequence 3 times
    
    for (let repeat = 0; repeat < repeatCount; repeat++) {
      const sequenceStartTime = repeat * (beepCount * (beepDuration + beepGap) + sequenceGap);
      
      for (let i = 0; i < beepCount; i++) {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800; // High pitch alarm sound
        oscillator.type = 'sine';
        
        const startTime = audioContext.currentTime + sequenceStartTime + i * (beepDuration + beepGap);
        
        gainNode.gain.setValueAtTime(0, startTime);
        gainNode.gain.linearRampToValueAtTime(0.3, startTime + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + beepDuration);
        
        oscillator.start(startTime);
        oscillator.stop(startTime + beepDuration);
      }
    }
  };

  // Play start sound when timer begins
  const playStartSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 600; // Mid-high pitch
    oscillator.type = 'sine';
    
    const now = audioContext.currentTime;
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.2, now + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
    
    oscillator.start(now);
    oscillator.stop(now + 0.15);
  };

  // Play click sound when dragging dial
  const playClickSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = 400; // Lower pitch click
    oscillator.type = 'square';
    
    const now = audioContext.currentTime;
    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0.1, now + 0.005);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
    
    oscillator.start(now);
    oscillator.stop(now + 0.05);
  };

  // Play sound when a split ends
  const playSplitSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create a two-tone sound
    for (let i = 0; i < 2; i++) {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = i === 0 ? 500 : 700; // Two different tones
      oscillator.type = 'sine';
      
      const startTime = audioContext.currentTime + i * 0.12;
      gainNode.gain.setValueAtTime(0, startTime);
      gainNode.gain.linearRampToValueAtTime(0.15, startTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.1);
      
      oscillator.start(startTime);
      oscillator.stop(startTime + 0.1);
    }
  };

  // Timer countdown effect
  useEffect(() => {
    if (isRunning && remainingSeconds > 0) {
      timerRef.current = setInterval(() => {
        setRemainingSeconds((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            playAlarmSound();
            setShowTimesUp(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning, remainingSeconds]);

  // Detect split completion and play sound
  useEffect(() => {
    if (splits > 1 && isRunning) {
      const timePerSplit = (totalMinutes * 60) / splits;
      const elapsedSeconds = (totalMinutes * 60) - remainingSeconds;
      const currentSplitIndex = Math.min(splits - 1, Math.floor(elapsedSeconds / timePerSplit));
      
      // Play sound when moving to next split (but not on initial start)
      if (currentSplitIndex > previousSplitIndexRef.current && remainingSeconds > 0) {
        playSplitSound();
      }
      
      previousSplitIndexRef.current = currentSplitIndex;
    }
  }, [remainingSeconds, splits, totalMinutes, isRunning]);

  // Reset split index when timer is reset or stopped
  useEffect(() => {
    if (!isRunning) {
      previousSplitIndexRef.current = 0;
    }
  }, [isRunning]);

  const handlePlayPause = () => {
    if (remainingSeconds > 0) {
      const newRunningState = !isRunning;
      setIsRunning(newRunningState);
      setShowTimesUp(false);
      
      // Play sound when starting timer
      if (newRunningState) {
        playStartSound();
      }
    }
  };

  const handleReset = () => {
    setIsRunning(false);
    setRemainingSeconds(totalMinutes * 60);
    setShowTimesUp(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleTimeClick = () => {
    if (!isRunning) {
      setIsEditingTime(true);
      setEditValue(formatTime(remainingSeconds));
      setTimeout(() => inputRef.current?.select(), 0);
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const handleTimeBlur = () => {
    setIsEditingTime(false);
    // Parse the time value
    const parts = editValue.split(':');
    if (parts.length === 2) {
      const mins = parseInt(parts[0]) || 0;
      const secs = parseInt(parts[1]) || 0;
      const totalSecs = Math.min(60 * 60, Math.max(0, mins * 60 + secs)); // Max 60 minutes
      const totalMins = Math.ceil(totalSecs / 60);
      setTotalMinutes(Math.max(1, totalMins));
      setRemainingSeconds(totalSecs);
    }
  };

  const handleTimeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      inputRef.current?.blur();
    }
  };

  // Calculate angle from mouse/touch position
  const getAngleFromEvent = (clientX: number, clientY: number): number => {
    if (!containerRef.current) return 0;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // Calculate angle in degrees (0° at top, clockwise)
    let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
    angle = (angle + 90 + 360) % 360; // Convert to 0° at top

    return angle;
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (isRunning) return; // Don't allow dragging while timer is running
    
    setIsDragging(true);
    playClickSound(); // Play sound when starting to drag
    
    const angle = getAngleFromEvent(e.clientX, e.clientY);
    // Dragging counterclockwise from top increases time
    // angle 0 = 0 min, angle 270 (left) = 15 min, angle 180 (bottom) = 30 min, angle 90 (right) = 45 min
    const minutes = angle === 0 ? 0 : Math.round(((360 - angle) / 360) * 60);
    const mins = Math.max(1, Math.min(60, minutes));
    setTotalMinutes(mins);
    setRemainingSeconds(mins * 60);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || isRunning) return;

    const angle = getAngleFromEvent(e.clientX, e.clientY);
    // Dragging counterclockwise from top increases time
    const minutes = angle === 0 ? 0 : Math.round(((360 - angle) / 360) * 60);
    const mins = Math.max(1, Math.min(60, minutes));
    setTotalMinutes(mins);
    setRemainingSeconds(mins * 60);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  // Create arc path for remaining time
  // Arc always ends at 0 (top) and starts counterclockwise from there
  // As time counts down, the start moves clockwise toward 0
  const createArcPath = (minutes: number): string => {
    const radius = 220;
    const centerX = 300;
    const centerY = 300;

    if (minutes <= 0) return '';
    
    const angle = (minutes / 60) * 360;
    
    if (angle >= 359.9) {
      // Full circle - draw as two semicircles to avoid rendering issues
      const x1 = centerX;
      const y1 = centerY - radius;
      const x2 = centerX;
      const y2 = centerY + radius;
      return `M ${x1},${y1} A ${radius},${radius} 0 0,1 ${x2},${y2} A ${radius},${radius} 0 0,1 ${x1},${y1}`;
    }

    // Arc ends at top (0 position)
    const endAngle = -90;
    // Arc starts counterclockwise from top by 'angle' degrees
    const startAngle = endAngle - angle;
    
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;
    
    const startX = centerX + radius * Math.cos(startRad);
    const startY = centerY + radius * Math.sin(startRad);
    const endX = centerX + radius * Math.cos(endRad);
    const endY = centerY + radius * Math.sin(endRad);
    
    const largeArc = angle > 180 ? 1 : 0;

    // Draw arc clockwise from start to end (which is at top)
    return `M ${startX},${startY} A ${radius},${radius} 0 ${largeArc},1 ${endX},${endY}`;
  };

  // Calculate remaining time (arc shows time remaining, shrinks as countdown runs)
  const remainingMinutes = remainingSeconds / 60;
  const arcPath = createArcPath(remainingMinutes);
  
  // Calculate handle position (at the start of the arc - the moving end)
  // Arc starts at -90 - angle degrees and ends at -90 (top)
  const arcAngle = (remainingMinutes / 60) * 360;
  const handleAngle = -90 - arcAngle; // Position at the start of the arc
  const handleRad = (handleAngle * Math.PI) / 180;
  const handleRadius = 220;
  const handleX = 300 + handleRadius * Math.cos(handleRad);
  const handleY = 300 + handleRadius * Math.sin(handleRad);

  // Calculate split info
  const timePerSplit = (totalMinutes * 60) / splits;
  const elapsedSeconds = (totalMinutes * 60) - remainingSeconds;
  const currentSplitIndex = Math.min(splits - 1, Math.floor(elapsedSeconds / timePerSplit));
  const elapsedInCurrentSplit = elapsedSeconds - (currentSplitIndex * timePerSplit);
  const timeInCurrentSplit = timePerSplit - elapsedInCurrentSplit;
  
  const handleSplitChange = (e: React.PointerEvent, delta: number) => {
    e.stopPropagation(); // Prevent triggering dial drag
    e.preventDefault(); // Prevent any default behavior
    if (isRunning) return;
    const newSplits = Math.max(1, Math.min(10, splits + delta));
    setSplits(newSplits);
  };

  // Render mini dial for splits
  const renderMiniDial = (splitIndex: number) => {
    const isActive = splitIndex === currentSplitIndex && remainingSeconds > 0;
    const isPast = splitIndex < currentSplitIndex;
    const isFuture = splitIndex > currentSplitIndex;
    
    // Calculate the progress for this split
    let progress = 0;
    if (isPast) {
      progress = 0; // Already completed
    } else if (isActive) {
      progress = timeInCurrentSplit / timePerSplit;
    } else if (isFuture) {
      progress = 1; // Not started yet, show full
    }
    
    const createMiniArcPath = (progressValue: number, radius: number, centerX: number, centerY: number): string => {
      if (progressValue <= 0) return '';
      
      const angle = progressValue * 360;
      
      if (angle >= 359.9) {
        const x1 = centerX;
        const y1 = centerY - radius;
        const x2 = centerX;
        const y2 = centerY + radius;
        return `M ${x1},${y1} A ${radius},${radius} 0 0,1 ${x2},${y2} A ${radius},${radius} 0 0,1 ${x1},${y1}`;
      }

      const endAngle = -90;
      const startAngle = endAngle - angle;
      
      const startRad = (startAngle * Math.PI) / 180;
      const endRad = (endAngle * Math.PI) / 180;
      
      const startX = centerX + radius * Math.cos(startRad);
      const startY = centerY + radius * Math.sin(startRad);
      const endX = centerX + radius * Math.cos(endRad);
      const endY = centerY + radius * Math.sin(endRad);
      
      const largeArc = angle > 180 ? 1 : 0;

      return `M ${startX},${startY} A ${radius},${radius} 0 ${largeArc},1 ${endX},${endY}`;
    };

    // Mobile: smaller size (100px), Desktop: larger size (150px)
    const miniArcPathMobile = createMiniArcPath(progress, 40, 50, 50);
    const miniArcPathDesktop = createMiniArcPath(progress, 60, 75, 75);
    
    return (
      <div key={splitIndex} className="relative">
        {/* Mobile version */}
        <svg className="md:hidden" width="100" height="100" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="var(--card)"
            stroke="var(--foreground)"
            strokeWidth="2"
          />
          
          {miniArcPathMobile && (
            <path
              d={miniArcPathMobile}
              fill="none"
              stroke="var(--primary)"
              strokeWidth="12"
              opacity={isActive ? 1 : 0.5}
            />
          )}
          
          <text
            x="50"
            y="50"
            textAnchor="middle"
            dominantBaseline="central"
            style={{
              fontFamily: 'var(--font-space-mono)',
              fontSize: '16px',
              fontWeight: 'var(--font-weight-bold)',
              opacity: isActive ? 1 : 0.5,
              fill: 'var(--foreground)'
            }}
          >
            {splitIndex + 1}
          </text>
        </svg>
        
        {/* Desktop version */}
        <svg className="hidden md:block" width="150" height="150" viewBox="0 0 150 150">
          <circle
            cx="75"
            cy="75"
            r="67"
            fill="var(--card)"
            stroke="var(--foreground)"
            strokeWidth="2"
          />
          
          {miniArcPathDesktop && (
            <path
              d={miniArcPathDesktop}
              fill="none"
              stroke="var(--primary)"
              strokeWidth="18"
              opacity={isActive ? 1 : 0.5}
            />
          )}
          
          <text
            x="75"
            y="75"
            textAnchor="middle"
            dominantBaseline="central"
            style={{
              fontFamily: 'var(--font-space-mono)',
              fontSize: '20px',
              fontWeight: 'var(--font-weight-bold)',
              opacity: isActive ? 1 : 0.5,
              fill: 'var(--foreground)'
            }}
          >
            {splitIndex + 1}
          </text>
        </svg>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-4 md:p-8 w-full">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-[clamp(28px,6vw,40px)]">Nope Timer</h1>
        <p className="small-text" style={{ opacity: 0.6 }}>
          by nope.design
        </p>
      </div>

      <div className="flex items-center gap-8 w-full justify-center flex-wrap">
        {/* Timer Circle */}
        <div 
        ref={containerRef}
        className="relative w-full max-w-[600px] aspect-square"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 600 600"
          style={{ touchAction: 'none', cursor: isRunning ? 'default' : 'pointer' }}
        >
          {/* Background circle */}
          <circle
            cx="300"
            cy="300"
            r="250"
            fill="var(--card)"
            stroke="var(--foreground)"
            strokeWidth="4"
          />

          {/* Minute tick marks (60 total) */}
          {[...Array(60)].map((_, i) => {
            const angle = (i * 6 - 90) * (Math.PI / 180); // 6 degrees per minute
            const innerRadius = i % 5 === 0 ? 240 : 245; // Longer marks every 5 minutes
            const outerRadius = 252;
            const x1 = 300 + innerRadius * Math.cos(angle);
            const y1 = 300 + innerRadius * Math.sin(angle);
            const x2 = 300 + outerRadius * Math.cos(angle);
            const y2 = 300 + outerRadius * Math.sin(angle);

            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="var(--foreground)"
                strokeWidth={i % 5 === 0 ? "3" : "1.5"}
              />
            );
          })}

          {/* Arc showing remaining time */}
          {arcPath && (
            <path
              d={arcPath}
              fill="none"
              stroke="var(--primary)"
              strokeWidth="60"
              strokeLinecap="round"
            />
          )}

          {/* Numbers around the dial - inverted order (decreasing clockwise from 0) */}
          {[0, 55, 50, 45, 40, 35, 30, 25, 20, 15, 10, 5].map((num, index) => {
            const angle = (index / 12) * 360 - 90; // Position by index, -90 to start at top
            const rad = (angle * Math.PI) / 180;
            const radius = 280; // Position outside the circle
            const x = 300 + radius * Math.cos(rad);
            const y = 300 + radius * Math.sin(rad);

            return (
              <text
                key={num}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="var(--foreground)"
                style={{ 
                  fontFamily: 'var(--font-space-grotesk)',
                  fontSize: '32px',
                  fontWeight: 'var(--font-weight-bold)',
                  pointerEvents: 'none',
                  userSelect: 'none'
                }}
              >
                {num}
              </text>
            );
          })}

          {/* Draggable handle at the remaining time position */}
          {remainingMinutes > 0 && (
            <g style={{ pointerEvents: 'none' }}>
              {/* Larger invisible hit area for easier dragging */}
              <circle
                cx={handleX}
                cy={handleY}
                r="40"
                fill="transparent"
                style={{ pointerEvents: 'all', cursor: isRunning ? 'default' : 'grab' }}
              />
              {/* Visible handle */}
              <circle
                cx={handleX}
                cy={handleY}
                r="20"
                fill="var(--foreground)"
                stroke="var(--card)"
                strokeWidth="4"
              />
            </g>
          )}
        </svg>

        {/* Time display in center - editable when not running */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
          style={{ pointerEvents: isEditingTime ? 'auto' : 'none' }}
        >
          {isEditingTime ? (
            <input
              ref={inputRef}
              type="text"
              value={editValue}
              onChange={handleTimeChange}
              onBlur={handleTimeBlur}
              onKeyDown={handleTimeKeyDown}
              className="bg-transparent text-center border-2 border-primary rounded-lg px-2 md:px-4 outline-none"
              style={{ 
                fontFamily: 'var(--font-space-mono)', 
                fontSize: 'clamp(40px, 12vw, 72px)', 
                fontWeight: 'var(--font-weight-bold)',
                width: 'clamp(180px, 50vw, 280px)',
                color: 'var(--foreground)'
              }}
            />
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div 
                onClick={handleTimeClick}
                className={!isRunning ? 'cursor-pointer hover:opacity-70 transition-opacity' : ''}
                style={{ 
                  fontFamily: 'var(--font-space-mono)', 
                  fontSize: 'clamp(40px, 12vw, 72px)', 
                  fontWeight: 'var(--font-weight-bold)',
                  pointerEvents: 'auto',
                  whiteSpace: 'nowrap'
                }}
              >
                {showTimesUp && remainingSeconds === 0 ? "Time's up!" : formatTime(remainingSeconds)}
              </div>
              
              {/* Split controls */}
              <div className="flex flex-col items-center gap-2" style={{ pointerEvents: 'auto' }}>
                <p className="small-text" style={{ opacity: 0.6 }}>Split</p>
                <div className="flex items-center gap-2">
                  <button
                    onPointerDown={(e) => handleSplitChange(e, -1)}
                    disabled={isRunning || splits <= 1}
                    className="flex items-center justify-center w-7 h-7 rounded-[var(--radius-sm)] bg-card border-2 border-border hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{ 
                      fontFamily: 'var(--font-space-grotesk)',
                      fontWeight: 'var(--font-weight-bold)',
                      fontSize: '18px'
                    }}
                  >
                    -
                  </button>
                  <span 
                    style={{ 
                      fontFamily: 'var(--font-space-mono)',
                      fontWeight: 'var(--font-weight-bold)',
                      fontSize: '20px',
                      minWidth: '30px',
                      textAlign: 'center'
                    }}
                  >
                    {splits}
                  </span>
                  <button
                    onPointerDown={(e) => handleSplitChange(e, 1)}
                    disabled={isRunning || splits >= 10}
                    className="flex items-center justify-center w-7 h-7 rounded-[var(--radius-sm)] bg-card border-2 border-border hover:bg-muted transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    style={{ 
                      fontFamily: 'var(--font-space-grotesk)',
                      fontWeight: 'var(--font-weight-bold)',
                      fontSize: '18px'
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mini dials for splits */}
      {splits > 1 && (
        <div className={
          splits > 6 
            ? "grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" 
            : splits > 3 
              ? "grid grid-cols-2 gap-3 md:gap-4" 
              : splits > 1
                ? "flex flex-row gap-3 md:flex-col md:gap-4"
                : "flex flex-col gap-3 md:gap-4"
        }>
          {[...Array(splits)].map((_, index) => renderMiniDial(index))}
        </div>
      )}
      </div>

      {/* Control buttons */}
      <div className="flex gap-3 md:gap-4 flex-wrap justify-center">
        <button
          onClick={handlePlayPause}
          disabled={remainingSeconds === 0}
          className="flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-primary text-primary-foreground rounded-[var(--radius-button)] border-2 border-border hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
          style={{ boxShadow: 'var(--elevation-sm)' }}
        >
          {isRunning ? <Pause size={20} /> : <Play size={20} />}
          {isRunning ? 'Pause' : 'Start'}
        </button>

        <button
          onClick={handleReset}
          className="flex items-center justify-center gap-2 px-4 py-2 md:px-6 md:py-3 bg-card text-foreground rounded-[var(--radius-button)] border-2 border-border hover:bg-muted transition-colors"
          style={{ boxShadow: 'var(--elevation-sm)' }}
        >
          <RotateCcw size={20} />
          Reset
        </button>
      </div>
    </div>
  );
}
