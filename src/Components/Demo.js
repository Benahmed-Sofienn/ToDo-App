import React, { useState, useEffect } from "react";
import { Progress, Button } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const Demo = ({ location, progress, setProgress }) => {
  const [percent, setPercent] = useState(parseInt(progress));

  const increase = () => {
    if (percent < 100) {
      setPercent(percent + 10);
    }
  };

  useEffect(() => {
    setProgress(percent);
  }, [percent, setProgress]);

  const decline = () => {
    if (percent > 0) {
      setPercent(percent - 10);
      setProgress(percent);
    }
  };
  console.log(percent);

  return (
    <>
      {location ? (
        <>
          <Progress percent={percent} />
          <Button.Group>
            <Button onClick={decline} icon={<MinusOutlined />} />
            <Button onClick={increase} icon={<PlusOutlined />} />
          </Button.Group>
        </>
      ) : (
        <Progress percent={progress} />
      )}
    </>
  );
};

export default Demo;
