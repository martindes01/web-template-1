var SlideDelay = 0;
var SlideIndex = 0;
var WallIndex = 0;

function Document_Loaded() {
    var SlideCount = document.getElementsByClassName("SlideshowSlide").length;

    if (SlideCount > 0) {
        SlideshowSlide_Show(SlideIndex, SlideCount - 1);
        setInterval(Slideshow_Automatic, 10000, SlideCount);
    }
}

function GalleryWall_Increment(Gallery, Increment, WallCount) {
    WallIndex += Increment;

    if (WallIndex > WallCount - 1) {
        WallIndex = 0;
    } else if (WallIndex < 0) {
        WallIndex = WallCount - 1;
    }

    GalleryWall_Show(Gallery, WallIndex);
}

function GalleryWall_Show(Gallery, WallIndex) {
    var GalleryWallsActive = document.getElementById(Gallery).getElementsByClassName("GalleryWall_Show");
    for (i = 0; i < GalleryWallsActive.length; i++) {
        GalleryWallsActive[i].className = "GalleryWall";
    }

    var GalleryWalls = document.getElementById(Gallery).getElementsByClassName("GalleryWall");
    GalleryWalls[WallIndex].className = "GalleryWall_Show";

    var GalleryThumbnailsActive = document.getElementById(Gallery).getElementsByClassName("GalleryThumbnail_Active");
    for (i = 0; i < GalleryThumbnailsActive.length; i++) {
        GalleryThumbnailsActive[i].className = "GalleryThumbnail";
    }

    var GalleryThumbnails = document.getElementById(Gallery).getElementsByClassName("GalleryThumbnail");
    GalleryThumbnails[WallIndex].className = "GalleryThumbnail_Active";
}

function HeaderNavigation_Toggle() {
    var HeaderNavigation = document.getElementById("HeaderNavigation");
    var HeaderNavigationButton = document.getElementById("HeaderNavigationButton");

    if (HeaderNavigation.className == "HeaderNavigation") {
        HeaderNavigation.className = "HeaderNavigation_Show";
        HeaderNavigationButton.className = "HeaderNavigationButtonClose";
    } else {
        HeaderNavigation.className = "HeaderNavigation";
        HeaderNavigationButton.className = "HeaderNavigationButtonOpen";
    }
}

function HeaderNavigationDropdownContent_Show(DropdownContent, DropdownIcon) {
    var HeaderNavigationDropdownContent = document.getElementById(DropdownContent);
    var HeaderNavigationDropdownIcon = document.getElementById(DropdownIcon);
    var HeaderNavigationDropdownIcon_className = HeaderNavigationDropdownIcon.className;

    HeaderNavigationDropdowns_CloseAll();

    if (HeaderNavigationDropdownIcon_className == "HeaderNavigationDropdownIconPlus") {
        HeaderNavigationDropdownContent.className = "HeaderNavigationDropdownContent_Show";
        HeaderNavigationDropdownIcon.className = "HeaderNavigationDropdownIconMinus";
    }
}

function HeaderNavigationDropdowns_CloseAll() {
    var HeaderNavigationDropdownsActive = document.getElementsByClassName("HeaderNavigationDropdownContent_Show");
    for (i = 0; i < HeaderNavigationDropdownsActive.length; i++) {
        HeaderNavigationDropdownsActive[i].className = "HeaderNavigationDropdownContent";
    }

    var HeaderNavigationDropdownIconsMinus = document.getElementsByClassName("HeaderNavigationDropdownIconMinus");
    for (i = 0; i < HeaderNavigationDropdownIconsMinus.length; i++) {
        HeaderNavigationDropdownIconsMinus[i].className = "HeaderNavigationDropdownIconPlus";
    }
}

function Lightbox_Open(Modal, Gallery) {
    SlideDelay = 360;

    document.getElementById(Modal).classList.toggle("Modal_Open");
    document.getElementById("Page").style.overflowY = "hidden";

    GalleryWall_Show(Gallery, 0);
}

function Lightbox_Close(Modal) {
    document.getElementById(Modal).classList.remove("Modal_Open");
    document.getElementById("Page").style.overflowY = "initial";

    SlideDelay = 0;
}

function Slideshow_Automatic(SlideCount) {
    if (SlideDelay > 0) {
        SlideDelay -= 1;
    } else {
        SlideshowButtonNext_Clicked(SlideCount);
    }
}

function SlideshowButtonNext_Clicked(SlideCount) {
    var ScreenIndex = SlideIndex;
    SlideIndex += 1;

    if (SlideIndex > SlideCount - 1) {
        SlideIndex = 0;
    }

    SlideshowSlide_Show(SlideIndex, ScreenIndex);
}

function SlideshowButtonPrevious_Clicked(SlideCount) {
    var ScreenIndex = SlideIndex;
    SlideIndex -= 1;

    if (SlideIndex < 0) {
        SlideIndex = SlideCount - 1;
    }

    SlideshowSlide_Show(SlideIndex, ScreenIndex);
}

function SlideshowIndicator_Clicked(SlideIndexNew) {
    var ScreenIndex = SlideIndex;
    SlideIndex = SlideIndexNew

    SlideshowSlide_Show(SlideIndex, ScreenIndex);
}

function SlideshowSlide_Show(SlideIndex, ScreenIndex) {
    var SlideshowScreensActive = document.getElementsByClassName("SlideshowScreen_Show");
    for (i = 0; i < SlideshowScreensActive.length; i++) {
        SlideshowScreensActive[i].className = "SlideshowScreen";
    }

    var SlideshowScreens = document.getElementsByClassName("SlideshowScreen");
    SlideshowScreens[ScreenIndex].className = "SlideshowScreen_Show";

    var SlideshowSlidesActive = document.getElementsByClassName("SlideshowSlide_Show");
    for (i = 0; i < SlideshowSlidesActive.length; i++) {
        SlideshowSlidesActive[i].className = "SlideshowSlide";
    }

    var SlideshowSlides = document.getElementsByClassName("SlideshowSlide");
    SlideshowSlides[SlideIndex].className = "SlideshowSlide_Show";

    var SlideshowIndicatorsActive = document.getElementsByClassName("SlideshowIndicator_Active");
    for (i = 0; i < SlideshowIndicatorsActive.length; i++) {
        SlideshowIndicatorsActive[i].className = "SlideshowIndicator";
    }

    var SlideshowIndicators = document.getElementsByClassName("SlideshowIndicator");
    SlideshowIndicators[SlideIndex].className = "SlideshowIndicator_Active";
}

window.onclick = function (event) {
    if (!event.target.matches('.HeaderNavigationDropdownButton')) {
        HeaderNavigationDropdowns_CloseAll();
    }
}
