import * as Accordion from "@radix-ui/react-accordion";

function FaqAccordion({ question, answer }) {
  return (
    // <Accordion.Root
    //   type="single"
    //   collapsible
    //   className="accordion"
    // >
    //   <Accordion.Item
    //     value={question}
    //     className="accordion__item"
    //   >
    //     <Accordion.Header className="accordion__heading">
    //       <Accordion.Trigger className="accordion__button">
    //         {question}
    //       </Accordion.Trigger>
    //     </Accordion.Header>

    //     <Accordion.Content className="accordion__panel">
    //       {answer}
    //     </Accordion.Content>
    //   </Accordion.Item>
    // </Accordion.Root>

    <Accordion.Root type="single" collapsible  className="accordion">
      <Accordion.Item value="item-1" className="accordion__item">
        <Accordion.Header className="accordion__heading">
          <Accordion.Trigger className="accordion__button">
            {question}
          </Accordion.Trigger>
        </Accordion.Header>

        <Accordion.Content className="accordion__panel">
          <div className="ContentInner">{answer}</div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}

export default FaqAccordion;
