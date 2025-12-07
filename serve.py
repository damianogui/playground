import http.server
import socketserver
import os
import sys

# Change directory to the folder containing this script (playground)
script_dir = os.path.dirname(os.path.abspath(__file__))
os.chdir(script_dir)

PORT = 8000

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=".", **kwargs)

try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print(f"Serving playground from {os.getcwd()}")
        print(f"http://localhost:{PORT}")
        print(f"\nTOOLS AVAILABLE:")
        print(f"- Timer:       http://localhost:{PORT}/nopetimer/index.html")
        print(f"- Split Timer: http://localhost:{PORT}/nopetimersplit/index.html")
        print(f"- Quiz:        http://localhost:{PORT}/nopequiz/index.html (Requires Build)")
        print("\nPress Ctrl+C to stop.")
        httpd.serve_forever()
except OSError as e:
    if e.errno == 98: # Address already in use
        print(f"Error: Port {PORT} is already in use. Try stopping other servers or wait a moment.")
    else:
        raise
except KeyboardInterrupt:
    print("\nServer stopped.")
