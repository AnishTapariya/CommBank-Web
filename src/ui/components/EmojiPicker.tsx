import { BaseEmoji, Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'
import { useAppSelector } from '../../store/hooks'
import { selectMode } from '../../store/themeSlice'

type Props = {
  onSelect: (emoji: string) => void;
};

export const EmojiPicker = ({ onSelect }: Props) => {
  return (
    <div>
      {["🎯","🚗","🏠","💰","📚","✈️"].map((e) => (
        <span
          key={e}
          style={{ fontSize: "24px", cursor: "pointer", margin: "5px" }}
          onClick={() => onSelect(e)}
        >
          {e}
        </span>
      ))}
    </div>
  );
};
