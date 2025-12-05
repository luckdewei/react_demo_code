import { FC, PropsWithChildren, ReactNode } from "react";

// 第二种方案不使用 chilren 传入具体内容，而是自己定义一个 prop：

interface RowListProps extends PropsWithChildren {
  items: Array<{
    id: number;
    content: ReactNode;
  }>;
}

const RowList: FC<RowListProps> = (props) => {
  const { items } = props;

  return (
    <div className="row-list">
      {items.map((item) => {
        return (
          <div className="row" key={item.id}>
            {item.content}
          </div>
        );
      })}
    </div>
  );
};

function App() {
  return (
    <RowList
      items={[
        {
          id: 1,
          content: <div>111</div>,
        },
        {
          id: 2,
          content: <div>222</div>,
        },
        {
          id: 3,
          content: <div>333</div>,
        },
      ]}
    ></RowList>
  );
}

export default App;
