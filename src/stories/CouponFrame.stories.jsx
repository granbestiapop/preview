import { CouponFrame } from './CouponFrame';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/CouponFrame',
  component: CouponFrame,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    primary: false,
    label: 'Button',
  },
};


export const Mocked = {
  decorators: [
    (Story) => (
      <div style={{ margin: '3em', backgroundColor: 'red' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};

export const Url = () => {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const allParams = {};
  for (const [key, value] of params.entries()) {
    allParams[key] = value;
  }
  return (<CouponFrame {...allParams} ></CouponFrame>)
}