var app = angular.module("addrBook",[]);
        app.controller("myCtrl",function($scope){
            $scope.info = [
                {name:"Tom",tel:"012-345-6789"},
                {name:"Jerry",tel:"012-345-6789"},
                {name:"Philip",tel:"012-345-6789"}
            ];
            //查询联系人

            //新增联系人
            $scope.addMe = function(){
                return {
                    name: $scope.newName,
                    tel:$scope.newTel
                }
            }
            $scope.addItem = function(){
             for(var i=0;i<$scope.info.length;i++){
                 //对于重复联系人的警告处理
                 if(($scope.info[i].name == $scope.addMe().name)||
                    ($scope.info[i].tel == $scope.addMe().tel)){
                     alert("name or telphone number was repeated");
                     return false;
                 }
             }
             $scope.info.push($scope.addMe());
              }

            //删除联系人还有其他的方法
            $scope.removeItem = function(){
                $scope.info.splice(this.$index,1)
            }
            // 修改联系人信息
            $scope.change = function(){
              index = this.$index;
              $scope.showMe = function(indx){
                  if(indx == index){
                   return true;
                  }
              }
            }
            $scope.save = function(){
              index = this.$index;
              $scope.showMe = function(indx){
                  if(indx == index){
                   return false;
                  }
              }
            }
        })
