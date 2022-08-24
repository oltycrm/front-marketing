import { marked } from "marked";

export default function PostBody({ content }: any) {
  const html = marked.parse(content);
  return (
    <div className="max-w-2xl mx-auto">
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
