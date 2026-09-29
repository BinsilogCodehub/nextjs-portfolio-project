import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Vince | Personal Portfolio",
  description: "A simple Next.js personal portfolio website."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <footer className="footer">
          <p>© 2026 Vince Morada. Built with Next.js.</p>
        </footer>
      </body>
    </html>
  );
}