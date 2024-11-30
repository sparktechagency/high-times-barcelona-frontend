declare namespace JSX {
  interface IntrinsicElements {
    'ion-icon': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        name?: string;
        color?: string;
        size?: string;
      },
      HTMLElement
    >;
  }
}
