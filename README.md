# Movie Discovery Application

A responsive movie browsing application built with Next.js 15, TypeScript, and Tailwind CSS, powered by The Movie Database (TMDB) API.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- TMDB API Key v3 ([Get one here](https://www.themoviedb.org/settings/api))

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd pyutoheolr
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```bash
   cp .env.example .env.local
   ```

   Add your TMDB API Key (v3) to `.env.local`:

   ```env
   TMDB_API_KEY=your_api_key_here
   ```

   > 🔒 **Security Note**: The API key is server-side only (no `NEXT_PUBLIC_` prefix). Never commit `.env.local` to version control.

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
pyutoheolr/
├── src/
│   ├── app/                    # Next.js App Router pages
│   ├── components/             # React components
│   ├── services/               # API layer (server-side)
│   │   └── tmdb.ts            # TMDB API endpoints
│   ├── config/                 # Configuration files
│   │   └── tmdb.config.ts     # TMDB constants
│   └── lib/                    # Utilities and helpers
│       └── tmdb/
│           └── fetch.ts       # Core fetch function
├── .env.local                  # Local environment (git-ignored)
├── .env.example                # Environment template
└── README.md
```

## 🔐 Environment Variables

| Variable       | Description            | Required |
| -------------- | ---------------------- | -------- |
| `TMDB_API_KEY` | Your TMDB API Key (v3) | Yes      |

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **API**: TMDB API v3
- **HTTP Client**: Native `fetch` with Next.js caching

## 📝 Development

This project follows Next.js best practices:

- Server Components for data fetching
- Built-in `fetch` with ISR caching
- Secure API key management (server-side only)
- TypeScript strict mode

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variable:
   - `TMDB_API_KEY` = your_api_key_v3
4. Deploy

### Other Platforms

Set the `TMDB_API_KEY` environment variable in your deployment platform's dashboard.

## 📄 License

This project is for educational purposes.
