export interface INavItem {
    title : string;
    url : string;
    isVisible? : boolean;
    children? : INavItem[];
    imgSrc? : string;
}