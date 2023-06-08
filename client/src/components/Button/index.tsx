import classNames from "classnames";
const theme = {
  color: {
    white: "btn-white",
    primary: "theme-btn-1",
    secondary: "theme-btn-2",
  },
};
export default function Button(props: any) {
  const cls = "btn";
  const { className, children, onClick, type = "button", color = "", ...otherProps } = props;
  return (
    <button type={type} className={classNames(cls, className)} onClick={onClick}>
      {children}
    </button>
  );
}
