import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
function Groups({ data }) {
  return (
    <GroupsWrapper>
      <h4 className="namegroups">الجمعيات الخيرية</h4>
      <div className="groups">
        {data.map(({ pkID, Logo, Name }) => {
          return (
            <div key={pkID} className="group">
              <img src={Logo} className="img-logo" alt="" />
              <h4 className="name">{Name}</h4>
              <button className="btn">تبرع الان</button>
            </div>
          );
        })}
      </div>
    </GroupsWrapper>
  );
}

function MapStateToProps(state) {
  return {
    data: state.Groups,
  };
}

export default connect(MapStateToProps)(Groups);

const GroupsWrapper = styled.div`
  .namegroups {
    color: #fff;
    text-align: right;
    padding: 10px 30px 0 0;
    font-size: 2rem;
    margin: 0;
    height: 30px;
  }
  .groups {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 20px;
    margin: 0 20px;
    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 375px) {
      grid-template-columns: repeat(1, 1fr);
      margin: 0 100px;
    }
    .group {
      height: 450px;
      border-radius: 10px;
      margin: auto;
      text-align: center;
      background: #fff;
      margin: 40px 0;
      .img-logo {
        width: 90%;
        display: block;
        margin: auto;
        padding: 10px;
        height: 60%;
      }
      .name {
        color: #3a89c3;
        font-size: 1.2rem;
        text-align: center;
      }
      .btn {
        width: 80%;
        background-color: #e6007e;
        border: 0;
        border-radius: 10px;
        font-size: 1.5rem;
        padding: 5px;
        color: #fff;
        font-family: Arial, Helvetica, sans-serif;
        cursor: pointer;
        &:focus {
          outline: none;
        }
      }
    }
  }
`;
