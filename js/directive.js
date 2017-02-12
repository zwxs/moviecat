angular.module('movieApp.directive',[])
	.directive('autoActive',function () {
		return {
			link:function (scope,element) {
				element.on('click',function () {
					element.parent().children().removeClass('active');
					element.addClass('active');
				})
			}
		}
	});