import { Layout } from "antd";
import styled from "styled-components";

export const StyledLayout = styled(Layout)`
  height: 100vh;

  .header-content {
    color: #ffffff;
    font-weight: bold;
    font-size: x-large;
  }
`;

export const StyledContent = styled(Layout.Content)`
  padding: 50px 50px 0 50px;

  .layout-content {
    height: 100%;
    padding: "24px";
    background: #ffffff;

    .ant-table {
      padding: 20px;
    }

    .ant-table-thead th {
      font-weight: bold !important;
      font-size: larger;
    }

    .ant-table-tbody > tr > td:first-child {
      cursor: pointer;
    }

    .ant-table-row:hover > td {
      background-color: #f5faff;
    }
  }
`;
