import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import svgPaths from '../imports/svg-msx00fkynr';

interface SideMenuProps {
  currentTool: 'timer' | 'split-timer' | 'quiz';
}

export function SideMenu({ currentTool }: SideMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const tools = [
    {
      id: 'timer' as const,
      name: 'Timer',
      url: '../nopetimer/index.html',
      iconPath: svgPaths.p3cae7780,
    },
    {
      id: 'split-timer' as const,
      name: 'Split Timer',
      url: '../nopetimersplit/index.html',
      iconPath: svgPaths.p2e36ee00,
    },
    {
      id: 'quiz' as const,
      name: 'Quiz',
      url: './',
      iconPath: svgPaths.p3cd2ca00,
    },
  ];

  return (
    <>
      {/* Menu Button - Fixed Position */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-[30px] top-[30px] z-50 size-[60px] bg-primary rounded-full flex items-center justify-center hover:opacity-90 transition-opacity"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <Menu className="w-6 h-6 text-primary-foreground" />
        )}
      </button>

      {/* Side Menu Overlay */}
      {isOpen && (
        <>
          {/* Menu Panel */}
          <div className="fixed left-0 top-0 bottom-0 w-full md:w-[250px] bg-primary z-40 flex flex-col gap-[23px] px-[30px] py-[107px] overflow-y-auto">
            {/* Title */}
            <div className="text-primary-foreground mb-4">
              <h2 style={{ fontSize: '30px', lineHeight: '30px', fontWeight: 700 }}>
                Nope Tools
              </h2>
              <p className="small-text mt-2">by nope.design</p>
            </div>

            {/* Tool Buttons */}
            {tools.map((tool) => {
              const isActive = tool.id === currentTool;

              return (
                <a
                  key={tool.id}
                  href={tool.url}
                  className={`flex items-center gap-[20px] px-[20px] py-[17px] rounded-[10px] transition-all ${isActive
                    ? 'bg-primary text-primary-foreground border-2 border-primary-foreground'
                    : 'bg-card text-foreground'
                    }`}
                  style={{
                    boxShadow: '-4px 4px 0px 0px var(--primary)',
                    height: '64px',
                  }}
                >
                  {/* Icon */}
                  <div className="shrink-0">
                    <svg
                      className="block"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox={
                        tool.id === 'timer'
                          ? '0 0 30 30'
                          : tool.id === 'split-timer'
                            ? '0 0 25 30'
                            : '0 0 17 26'
                      }
                      style={{
                        width: tool.id === 'timer' ? '30px' : tool.id === 'split-timer' ? '24.375px' : '16.875px',
                        height: tool.id === 'timer' ? '30px' : tool.id === 'split-timer' ? '30px' : '25.781px',
                      }}
                    >
                      <path
                        d={tool.iconPath}
                        fill={isActive ? 'white' : 'var(--primary)'}
                      />
                    </svg>
                  </div>

                  {/* Label */}
                  <span
                    className={isActive ? '' : 'text-muted-foreground'}
                    style={{ fontSize: '18px', fontWeight: 700, lineHeight: '30px' }}
                  >
                    {tool.name}
                  </span>
                </a>
              );
            })}
          </div>
        </>
      )}
    </>
  );
}