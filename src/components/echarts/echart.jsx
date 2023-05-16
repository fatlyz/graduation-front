import React from 'react'
// import * as echarts from 'echarts';
import ReactEcharts from 'echarts-for-react';
import './echart.css'
export default function Linegram(props){
    // const {datas,display} = props
    const {datas} = props
    var minnum
    var maxnum
    const getfanlist = () => {
        let fanslist = []
        for (let i = 0, len = datas.data.fansinfo?.length; i < len; i++) fanslist.push(datas.data.fansinfo[i].fannum)
        return fanslist
    }
    const getdatelist = () => {
      let datelist = []
      for (let i = 0, len = datas.data.fansinfo?.length; i < len; i++){
        datelist.push(datas.data.fansinfo[i].date)
      }
        return datelist
    }
    const getlinegram = ()=>{
        const fanlist = getfanlist(datas)
        const datelist = getdatelist(datas)
        let option = {
          title: {
            text: '粉丝日期变化图'
          },
          xAxis: {
            type: 'category',
            data: datelist,
            name:'日期',
            boundaryGap: false
          },
          tooltip : {
            show: true,
            trigger: 'item'
            // trigger: 'axis',
            // axisPointer: {
            // type: 'cross',
            // label: {
            // backgroundColor: '#6a7985'
            // }
            // }
          },
          yAxis: {
            axisLine: {show: true},
            type: 'value',
            scale:true
          },
          series: [
            {
              data:fanlist ,
              type: 'line'
            }
          ]
        };
        return option
        
    }
    return(
        
        <div className="col-md-6 ">
          <div  >
          {/* <div> */}
            <ReactEcharts option={getlinegram()} />
          </div>
        </div>
        )
}
export  function Histogram(props){
  const {datas} = props
  const getplaylist = () => {
      let playlist = []
      for (let i = 0, len = datas.data.videoinfo?.length; i < len; i++) playlist.push(datas.data.videoinfo[i].play)
      return playlist
  }
  const getlikelist = () => {
    let playlist = []
    for (let i = 0, len = datas.data.videoinfo?.length; i < len; i++) playlist.push(datas.data.videoinfo[i].like)
    return playlist
  }
  const getcoinlist = () => {
    let playlist = []
    for (let i = 0, len = datas.data.videoinfo?.length; i < len; i++) playlist.push(datas.data.videoinfo[i].coin)
    return playlist
  }
  const getfavoritelist = () => {
    let playlist = []
    for (let i = 0, len = datas.data.videoinfo?.length; i < len; i++) playlist.push(datas.data.videoinfo[i].favorite)
    return playlist
  }
  const gettitlelist = () => {
    let titlelist = []
    for (let i = 0, len = datas.data.videoinfo?.length; i < len; i++){
      titlelist.push(datas.data.videoinfo[i].title)
    }
      return titlelist
  }
  const getlinegram = ()=>{
      const titlelist = gettitlelist(datas)
      const playlist = getplaylist(datas)
      const likelist = getlikelist(datas)
      const coinlist = getcoinlist(datas)
      const favoritelist = getfavoritelist(datas)
      let option = {
        title: {
              text: '视频信息'
            },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
           data: ['play', 'like', 'coin', 'favorite']
        },
        xAxis: [
          {
            type: 'category',
            data: titlelist,
            axisPointer: {
              type: 'shadow'
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: 'play',
            scale:true
          },
          {
            type: 'log',
            name: '点赞投币收藏',
            scale:true
          }
        ],
        series: [
          {
            name: 'play',
            type: 'bar',
            data: playlist
          },
          {
            name: 'like',
            type: 'line',
            data: likelist,
            yAxisIndex: 1,
            smooth: true
          },
          {
            name: 'coin',
            type: 'line',
            data: coinlist,
            yAxisIndex: 1,
            smooth: true
          },
          {
            name: 'favorite',
            type: 'line',
            data: favoritelist,
            yAxisIndex: 1,
            smooth: true
          }
        ]
      };
      return option
      
  }
  return(
      
      <div className="col-md-6 ">
        <div  className='echart'>
          <ReactEcharts option={getlinegram()} />
        </div> 
      </div>
      )
}