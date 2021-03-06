/**
 * 所有组件集体导出，即为全局组件
 * */

import footer from './x-footer/' // 底部导航栏
import content from './x-content/' // 内容区域组件
import flexBox from './x-flex-box/' // 栏目组件
import flexItem from './x-flex-item/' // 栏目组件项
import storeItem from './x-store-item/' // 门店列表项
import simpleItem from './x-simple-item/' // 普通的列表项
import chooseCategory from './x-choose-category/' // 门店条件筛选下拉列表
import group from './x-group/' // cell 组
import cellItem from './x-cell-item/' // 带右箭头的项
import progress from './x-progress/' // 进度条
import alert from './x-alert/' // 弹出框
import button from './x-button/' // 按钮
import input from './x-input/' // 输入框
import keyBoard from './x-key-board/' // 自定义键盘
import payDialog from './x-pay-dialog/' // 自定义键盘
import starBox from './x-star-box/' // 门店星级评分
import storeEvaluateItem from './x-store-evaluate-item/' // 评价的item

export default { footer , content , flexBox , flexItem , storeItem , chooseCategory , group , cellItem , simpleItem , progress , alert , button , input , keyBoard , payDialog , starBox , storeEvaluateItem}
