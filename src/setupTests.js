import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import nock from 'nock';

nock.disableNetConnect();
Enzyme.configure({ adapter: new Adapter() });
