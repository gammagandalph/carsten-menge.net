import { Component } from "react";

type AccordionProps = { content: IAccordionContent };
type AccordionItemState = { active: boolean };

export default class Accordion extends Component<AccordionProps> {
  render() {
    return (
      <div className="">
        {this.props.content.items.map((item, index) => {
          return <AccordionItem item={item} key={index} />;
        })}
      </div>
    );
  }
}

type AccordionContentProps = { item: IAccordionItem };

class AccordionItem extends Component<
  AccordionContentProps,
  AccordionItemState
> {
  constructor(props: AccordionContentProps) {
    super(props);
    this.state = { active: false };
  }
  render() {
    return (
      <div>
        <button
          onClick={() => this.switchState()}
          className={`w-full text-left transition hover:delay-100 rounded-lg m-1 text-2xl p-2 ${
            this.state.active ? "text-slate-900" : "text-gray-300"
          } ${
            this.state.active ? "bg-slate-400" : "bg-slate-900"
          } hover:bg-slate-400 hover:cursor-pointer`}
        >
          {this.props.item.title}
        </button>
        {this.state.active ? (
          <p className="p-2">{this.props.item.content}</p>
        ) : (
          ""
        )}
      </div>
    );
  }

  switchState() {
    this.setState({ active: !this.state.active });
  }
}

export interface IAccordionContent {
  items: IAccordionItem[];
}

export interface IAccordionItem {
  title: string;
  content: JSX.Element | string;
}
