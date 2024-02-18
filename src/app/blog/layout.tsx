export default function BlogPostLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return <div style={{ padding: 250, minHeight: '100vH', lineHeight: 1.7 }}>{children}</div>;
}
