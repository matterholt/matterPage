import React from "react";
import styled from "@emotion/styled";

const DumpContainr = styled.div`
  fontsize: 20;
  border: "1px solid #efefef";
  padding: 10;
  background: "white";
  background-color: white;
`;
const DumpHeader = styled.h1`
  text-align: center;
  color: #39a0ed;
  border-bottom: 2px dashed #39a0ed;
`;
export default function Dump(props) {
  return (
    <DumpContainr>
      <DumpHeader>Dump data and stuff</DumpHeader>
      {Object.entries(props).map(([key, val]) => (
        <pre key={key}>{JSON.stringify(val, "", " ")}</pre>
      ))}
    </DumpContainr>
  );
}
