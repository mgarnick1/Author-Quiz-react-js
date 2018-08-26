import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

function Hello(props) {
  return <h1> Hello at {props.now}</h1>
};

const moment = new Date(151654894);
describe("when testing directly", () => {
  let result;
  beforeAll(() => {
    result = Hello({ now: moment.toISOString() });
  });

it("returns a value", () => {
    expect(result).not.toBeNull();
});
  it("is a h1", () => {
    expect(result.type).toBe("h1");
  });
  it("has children", () => {
    expect(result.props.children).toBeTruthy();
  })
});


describe("when testing with enzyme", () => {
  it("renders a h1", () => {
    const wrapper = shallow(<Hello now={moment.toISOString()} />);
    expect(wrapper.find("h1").length).toBe(1);
  })
});