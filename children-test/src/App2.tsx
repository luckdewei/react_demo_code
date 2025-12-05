import React, { FC } from "react";

// React.children 的第一种替代方案
interface RowProps {
  children?: React.ReactNode;
}

const Row: FC<RowProps> = (props) => {
  const { children } = props;
  return <div className="row">{children}</div>;
};

interface RowListProps {
  children?: React.ReactNode;
}

const RowList: FC<RowListProps> = (props) => {
  const { children } = props;

  return <div className="row-list">{children}</div>;
};

function App() {
  return (
    <RowList>
      <Row>
        <div>111</div>
      </Row>
      <Row>
        <div>222</div>
      </Row>
      <Row>
        <div>333</div>
      </Row>
    </RowList>
  );
}

export default App;
