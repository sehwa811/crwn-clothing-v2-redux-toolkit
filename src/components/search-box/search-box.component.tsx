import { ChangeEvent, ChangeEventHandler } from "react";

import "./search-box.styles.css";

// interface IsearchBoxProps extends IChangeHandlerProps {
//   className: string;
//   placeholder?: string | null;
// }

// interface IChangeHandlerProps {
//   onChangeHandler: ()
// }

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  //onChangeHandler: ChangeEventHandler;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
