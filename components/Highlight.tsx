interface HighlightProps {
    text: string;
  }
  
  export default function Highlight({ text }: HighlightProps) {
    return (
      <div className="flex items-center space-x-3">
        <span className="w-3 h-3 rounded-full bg-accentOrange"></span>
        <p className="text-gray-300">{text}</p>
      </div>
    );
  }
  