
/**
 * @TODO 是否可以将该公共通用的装饰器HOC，放在App.tsx中 ?
 * 
 */
export {default as setStatusBar} from './setStatusBar';

/**
 * HowToUse(装饰器必须要修饰一个class而不是一个函数式组件):
 	
 	import { setStatusBar } from '../decorates';
	@setStatusBar({
	  barStyle: 'light-content',
	  translucent: true,
	  backgroundColor: 'transparent'
	})
	export default class MyPage extends React.PureComponent{}
 */
