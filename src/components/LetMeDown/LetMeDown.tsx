import React, { Component } from "react";
export interface LetMeDownProps {
  footerComponent: React.ReactNode;
  children: React.ReactNode;
}

type childState = {
  children: React.ReactNode;
};

export class LetMeDown extends Component<LetMeDownProps, childState> {
  private ref: React.RefObject<HTMLDivElement>;
  private footerRef: React.RefObject<HTMLDivElement>;

  constructor(props: LetMeDownProps) {
    super(props);
    this.ref = React.createRef();
    this.footerRef = React.createRef();
    this.state = {
      children: this.props.children,
    };
    this.changePosition = this.changePosition.bind(this);
  }

  componentDidMount() {
    const contentHeight = this.ref.current;
    const documentHeight = document.documentElement.clientHeight;
    if (
      contentHeight?.clientHeight &&
      contentHeight.clientHeight > documentHeight
    ) {
      if (this.footerRef.current) {
        this.footerRef.current.style.position = "relative";
      }
    }
    const mutationObserver = new MutationObserver((e) => {
      this.changePosition(e);
    });
    if (contentHeight)
      mutationObserver.observe(contentHeight, { childList: true });
  }

  changePosition(e: MutationRecord[]) {
    const contentHeight = this.ref.current;
    const documentHeight = document.documentElement.clientHeight;

    if (
      contentHeight?.clientHeight &&
      contentHeight.clientHeight > documentHeight
    ) {
      if (this.footerRef.current) {
        this.footerRef.current.style.position = "relative";
      }
    } else {
      if (this.footerRef.current) {
        this.footerRef.current.style.position = "fixed";
        this.footerRef.current.style.width = "100%";
      }
    }
    this.setState({
      ...this.state,
      children: this.props.children,
    });
  }
  render() {
    return (
      <>
        <div id="container" ref={this.ref}>
          {this.props.children}
        </div>
        <div
          id="footer"
          style={{
            position: "fixed",
            bottom: "0",
            width: "100%",
          }}
          ref={this.footerRef}
        >
          {this.props.footerComponent}
        </div>
      </>
    );
  }
}

export default LetMeDown;
