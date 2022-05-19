import { Layout } from "antd";
import Routes from "./Routes";
import "./global.css";
import { StyledContent, StyledLayout } from "./styles/App.style";

const { Header, Footer } = Layout;

function App() {
  return (
    <StyledLayout>
      <Header>
        <div className="header-content">Celfocus Frontend Test</div>
      </Header>
      <StyledContent>
        <div className="layout-content">
          <Routes />
        </div>
      </StyledContent>
      <Footer style={{ textAlign: "center" }}>
        Nathan Duarte @2022 Celfocus Frontend Test
      </Footer>
    </StyledLayout>
  );
}

export default App;
