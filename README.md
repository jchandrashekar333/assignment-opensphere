# openSphere TipTap Editor

A modern, paginated rich text editor built with Next.js and TipTap that automatically splits content into printable pages while providing a professional document editing experience.

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![TipTap](https://img.shields.io/badge/TipTap-3.15.3-purple?style=flat-square)

## ✨ Features

### 📝 Rich Text Editing
- **Bold, Italic** text formatting
- **Headings** (H1, H2) support
- **Paragraph** formatting
- **Bullet & Ordered** lists
- **Real-time** content editing with autofocus
- **Professional typography** with Times New Roman font

### 📄 Smart Pagination
- **Automatic page creation** when content exceeds 864px height
- **Real-time pagination** that updates as you type
- **Standard letter size** pages (816px × 1056px)
- **Print-ready layout** with proper margins (96px)
- **Dynamic content distribution** across pages

### 🎨 Modern UI/UX
- **Sticky toolbar** that stays accessible while scrolling
- **Visual feedback** for active formatting options
- **Smooth transitions** and hover effects
- **Clean, professional design** with shadows and borders
- **Responsive layout** with proper spacing

### 🛠 Technical Stack
- **Next.js 16.1.1** with App Router
- **React 19.2.3** with TypeScript
- **TipTap 3.15.3** for rich text editing
- **TailwindCSS** for styling
- **Component-based architecture**

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd openSphere/tiptap-editor
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application in action.

## 📁 Project Structure

```
tiptap-editor/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and TipTap styling
│   ├── layout.tsx         # Root layout with fonts
│   └── page.tsx           # Main page component
├── components/             # React components
│   ├── Editor.tsx         # TipTap rich text editor
│   ├── Page.tsx           # Page layout component
│   └── PaginatedEditor.tsx # Main pagination logic
├── public/                # Static assets
└── ...config files        # Next.js, TypeScript, Tailwind configs
```

## 🎯 Core Components

### PaginatedEditor
The main component that handles:
- Content pagination logic
- Real-time page updates
- Hidden editor pattern for measurement

### Editor
TipTap-based rich text editor with:
- Formatting toolbar
- Text styling options
- List creation tools

### Page
Print-ready page component with:
- Standard letter dimensions
- Professional margins
- Shadow effects for visual separation

## 🎨 Styling & Design

### Typography
- **Editor Content**: Times New Roman, 12pt, 1.5 line height
- **UI Elements**: Geist font family
- **Paragraph Spacing**: 12px margins

### Layout
- **Page Size**: 816px × 1056px (letter size)
- **Page Margins**: 96px on all sides
- **Page Spacing**: 32px between pages
- **Content Height**: 864px max per page

### Color Scheme
- **Pages**: White background with shadow
- **Main Background**: Light gray (#f3f4f6)
- **Toolbar**: White with blue accent colors
- **Active States**: Blue highlights

## 🔧 Configuration

### TipTap Extensions
The editor uses the StarterKit extension which includes:
- Heading
- Bold
- Italic
- Bullet List
- Ordered List
- Text
- Paragraph
- History

### Custom CSS Classes
- `.tiptap-toolbar` - Toolbar styling
- `.tiptap-editor` - Editor container
- `.ProseMirror` - TipTap content area

## 📦 Dependencies

### Core Dependencies
- `@tiptap/react` - React integration for TipTap
- `@tiptap/starter-kit` - Basic TipTap extensions
- `next` - Next.js framework
- `react` & `react-dom` - React library
- `tailwindcss` - CSS framework

### Development Dependencies
- `@types/*` - TypeScript definitions
- `eslint` - Code linting
- `typescript` - TypeScript compiler

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Related Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TipTap Documentation](https://tiptap.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev/)

## 🙏 Acknowledgments

- [TipTap](https://tiptap.dev/) for the excellent rich text editor framework
- [Next.js](https://nextjs.org/) for the powerful React framework
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
