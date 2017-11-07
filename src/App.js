import React, {Component} from 'react';
import './App.css';
import styled from 'styled-components';
// import Header from './Header';
// import Content from './Content';
import './style/grid.css';
import 'normalize.css';
import shape from './assets/shape.svg';

const Header = styled.header`
  background: #ffffff;
  box-shadow: 0px 0.5px 0px rgba(72, 72, 72, 0.3);
  display: flex;
  height: 80px;
`;

const Search = styled.div`
  width: 392px;
  height: 48px;
  left: 162px;
  top: 16px;
  background: #ffffff;
  border: 1px solid rgba(72, 72, 72, 0.2);
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
`;

const Logo = styled.div`
  width: 30px;
  height: 32px;
  left: 81px;
  top: 24px;
  background: url('./assets/shape.svg');
`;

const SearchLogo = styled.div`
  width: 21px;
  height: 22px;
  left: 178px;
  top: 29px;
  background: url('./assets/search.svg');
`;

const TryMiami = styled.input`
  width: 148px;
  height: 24px;
  left: 215px;
  top: 28px;
  font-family: CircularAir;
  line-height: 24px;
  font-size: 16px;
  color: #383838;
  mix-blend-mode: normal;
  opacity: 0.64;
`;

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header className="row">
          <Logo className="col-1" />
          <Search className="col-5">
            {/* <SearchLogo /> */}
            <TryMiami />
          </Search>
          <div className="col-2" />
          <div className="col-4">Become a host</div>
        </Header>
      </div>
    );
  }
}

export default App;
