var myVar;
        function myFunction() {
        myVar = setTimeout(showPage, 3000);
        }
        function showPage() {
            document.getElementsByClassName("loader")[0].style.display = "none";
            document.getElementsByClassName("loader-bg")[0].style.display = "none";
            document.getElementsByClassName("bodyContainer")[0].style.display = "block";
            document.getElementsByTagName("header")[0].style.display = "block";
            document.getElementsByTagName("footer")[0].style.display = "block";
        }
$(document).ready(function(){
    $(".menuIcon").click(function(){
        if($(".dashboardMenuItems").hasClass("activedDashboard")){
            $(".dashboardMenuItems").removeClass("activedDashboard");
            $(".outer-bg").removeClass("active");
        }
        else{
            $(".dashboardMenuItems").addClass("activedDashboard");
            $(".outer-bg").addClass("active");
        }
    });
    $(".exploreMenu").click(function(){
        if($(".subMenu").hasClass("active")){
            $(".subMenu").removeClass("active");
            $(this).find(".exploreDropdown").removeClass("activeDropdown");
        }
        else{
            $(".subMenu").addClass("active");
            $(this).find(".exploreDropdown").addClass("activeDropdown");
        }
    });
    $(".statisicsIcon").click(function(){
        $(".statisticsOuterContainer").addClass("activeStatistics");
        $(".bodyContainer").addClass("floatingContainer");
    });
    $(".closeStatisticsBtn").click(function(){
        $(".statisticsOuterContainer").removeClass("activeStatistics");
        $(".bodyContainer").removeClass("floatingContainer");
    });
    $(".identitiesIcon").click(function(){
        $(".identitiesOuterContainer").addClass("activeIdentities");
        $(".bodyContainer").addClass("floatingContainer");
    });
    $(".identitiesCloseBtn").click(function(){
        $(".identitiesOuterContainer").removeClass("activeIdentities");
        $(".bodyContainer").removeClass("floatingContainer");
    });
    $(".trustLevelIcon").click(function(){
        $(".trustLevelOuterContainer").addClass("activeTrustLevel");
        $(".bodyContainer").addClass("floatingContainer2");
    });
    $(".trustLevelCloseBtn").click(function(){
        $(".trustLevelOuterContainer").removeClass("activeTrustLevel");
        $(".bodyContainer").removeClass("floatingContainer2");
    });
    $(".floatingDashboardIcon").click(function(){
        $(".dashboardOuterContainer").addClass("activeDashboard");
        $(".bodyContainer").addClass("floatingContainer3");
    });
    $(".closeDashboardBtn").click(function(){
        $(".dashboardOuterContainer").removeClass("activeDashboard");
        $(".bodyContainer").removeClass("floatingContainer3");
    });
    $(".filterBox img").click(function(){
        $(".filterForm").addClass("activeFilterForm");
        $(".outer-bg").addClass("active");
    });
    $(".tableFieldValue img").click(function(){
        if($(".editDeleteBox").hasClass("active")){
            $(".editDeleteBox").removeClass("active");
            $(".outer-bg").removeClass("active")
        }
        else {
            $(this).siblings(".editDeleteBox").addClass("active");
            $(".outer-bg").addClass("active")
        }
    });
    $(".filterCloseBtn,.cancelBtn").click(function(){
        $(".filterForm").removeClass("activeFilterForm");
        $(".outer-bg").removeClass("active");
    });
    $(".addIdentityBtn").click(function(){
        $(".addIdentityForm").addClass("activeIdentityForm");
        $(".popup-bg").addClass("active");
    });
    $(".deleteBtn").click(function(){
        $(this).parent().parent().parent().parent().remove();
    });
    $(".editBtn").click(function(){
        $(".edit-Popup").addClass("active");
        $(".popup-bg").addClass("active");
    });
    $(".addIdentityCloseBtn,.identityCancelBtn,.editPopupClose,.cancelEditBtn,.popup-bg").click(function(){
        $(".addIdentityForm").removeClass("activeIdentityForm");
        $(".edit-Popup").removeClass("active");
        $(".popup-bg").removeClass("active");
    });
    $(".outer-bg").click(function(){
        $(".dashboardMenuItems").removeClass("activedDashboard");
        $(".filterForm").removeClass("activeFilterForm");
        $(".editDeleteBox").removeClass("active");
        $(".outer-bg").removeClass("active");
    });
});