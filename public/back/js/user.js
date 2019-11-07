$(function () {
  render();

  var currentPage = 1;//当前页
  var pageSize=5;//每页条数
  function render() {
    $.ajax({
      type: "get",
      url: "/user/queryUser",
      data: {
        page: currentPage,
        pageSize: pageSize
      },
      dataType: "json",
      success: function (info) {
        var htmlStr = template('tpl', info);
        $('.lt_content tbody').html(htmlStr);

        // 分页初始化
        $("#pagintor").bootstrapPaginator({
          bootstrapMajorVersion: 3, //默认是2，如果是bootstrap3版本，这个参数必填
          currentPage: info.page, //当前页
          totalPages: Math.ceil(info.total/info.size), //总页数
          size: "small", //设置控件的大小，mini, small, normal,large
          onPageClicked: function (a,b,c, page) {
            //为按钮绑定点击事件 page:当前点击的按钮值
            currentPage=page;
            // 重新渲染
            render();
          }
        });


      }
    })
  }

})