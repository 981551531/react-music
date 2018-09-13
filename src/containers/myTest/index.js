import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as myTestAction from '../../actions/myTest'

class MyTest extends React.Component {
    render() {
        console.log("获取推荐歌单",this.props.myTestinfo.info)
        return (
            <div>
                <h1>我测试的 <b>
                    {this.props.myTestinfo.info&&this.props.myTestinfo.info.map((item,index)=>{
                     return  <div>{
                           item.specialname
                       }</div>
                    })}
                </b></h1>
            </div>
        )
    }

    componentDidMount() {
        let aa={
            "timestamp": 1536841027,
            "info": [
                {
                    "recommendfirst": 1,
                    "specialname": "生活会有新的篇章，爱情也会迎来下一季",
                    "intro": "爱情是一件很简单的事情，如《黄金时代》所说：“爱就爱，不爱就丢掉”。只是，不是所有的爱情，都可以简单划分为爱或者不爱。在爱和不爱之间，还有很多种感情的可能性，比如：“我爱他，他爱她”“朋友至上，恋人未满”“不要天长地久，只要曾经拥有”，这就是爱情的复杂之处。它像风像雨又像雾，是一场冲破迷雾的冒险。\n如果爱情是两个人的旅程，那爱就是一个人的修行。误以为真爱降临，全情付出，最后却只是一个帮人上岸的摆渡人，这又有什么关系。光阴流转，季节更迭，枯萎的心总会再次复活。那时，生活会有新的篇章，爱情也会迎来下一季。",
                    "suid": 1287576926,
                    "is_selected": 0,
                    "selected_reason": "",
                    "slid": 0,
                    "trans_param": {
                        "special_tag": 0
                    },
                    "publishtime": "2018-09-08 00:00:00",
                    "singername": "",
                    "verified": 0,
                    "user_type": 1,
                    "user_avatar": "http://imge.kugou.com/kugouicon/165/20180607/20180607225025644705.jpg",
                    "imgurl": "http://imge.kugou.com/soft/collection/{size}/20180908/20180908140104361889.jpg",
                    "collectcount": 76,
                    "specialid": 527913,
                    "username": "Layis-eo",
                    "ugc_talent_review": 1,
                    "playcount": 599573
                },
                {
                    "recommendfirst": 1,
                    "specialname": "「欧美·青春派」年轻人就应该热血澎湃",
                    "intro": "年轻人就应该朝气蓬勃，热血澎湃，一张欧美「青春派」歌单，给你注入满满能量，向所有的不开心说拜拜，跟着音乐一起躁起来！",
                    "suid": 1287576637,
                    "is_selected": 0,
                    "selected_reason": "",
                    "slid": 0,
                    "trans_param": {
                        "special_tag": 0
                    },
                    "publishtime": "2018-08-29 00:00:00",
                    "singername": "",
                    "verified": 0,
                    "user_type": 1,
                    "user_avatar": "http://imge.kugou.com/kugouicon/165/20180818/20180818230547871589.jpg",
                    "imgurl": "http://imge.kugou.com/soft/collection/{size}/20180830/20180830022904194890.jpg",
                    "collectcount": 115,
                    "specialid": 521562,
                    "username": "萌德不萌",
                    "ugc_talent_review": 1,
                    "playcount": 309315
                }
            ],
            "total": 2158
        }
        this.props.myTestAction.addDate(aa)
    }
}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        myTestinfo: state.myTest
    }
}

function mapDispatchToProps(dispatch) {
    return {
        myTestAction: bindActionCreators(myTestAction, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyTest)
