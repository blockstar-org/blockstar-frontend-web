/// <reference types="react" />
interface HeadingProps {
    size?: string;
    lineheight?: string;
    margin?: string;
    padding?: string;
    spacing?: string;
    align?: 'center' | 'left' | 'right' | 'justify' | 'initial' | 'inherit' | 'start' | 'end';
    weight?: number;
    transform?: 'uppercase' | 'capitalize' | 'lowercase' | 'none';
}
export declare const H1: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, HeadingProps>> & string;
export declare const H2: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, HeadingProps>> & string;
export declare const H3: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, HeadingProps>> & string;
export declare const H4: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, HeadingProps>> & string;
export declare const Body: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, HeadingProps>> & string;
export declare const P1: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, HeadingProps>> & string;
export declare const P2: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, HeadingProps>> & string;
interface FlexProps {
    alignitems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | '';
    justifycontent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' | '';
    gap?: string;
    width?: string;
    height?: string;
    flexwrap?: string;
    padding?: string;
    margin?: string;
    fontfamily?: string;
    disabled?: boolean;
    cursor?: string;
    backgroundColor?: string;
    borderRadius?: string;
    flexDirection?: string;
    zindex?: number;
    position?: 'relative' | 'absolute';
}
export declare const FlexRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, FlexProps>> & string;
export declare const FlexColumn: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, FlexProps>> & string;
interface SVGWrapperProps {
    width?: string;
    height?: string;
    fill?: string;
    stroke?: string;
    cursor?: 'pointer' | 'not-allowed';
}
export declare const SVGWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, SVGWrapperProps>> & string;
export declare const SVGWrapperHighlight: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof SVGWrapperProps> & SVGWrapperProps, "ref"> & {
    ref?: import("react").Ref<HTMLDivElement>;
}, never>> & string;
export declare const Divider: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const VDivider: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const PlanCountTag: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const Status: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    bg?: any;
    fcolor?: any;
    noBorder?: any;
    fSize?: any;
    width?: any;
}>> & string;
export declare const StatusGrid: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    bg?: any;
    fcolor?: any;
    noBorder?: any;
    fSize?: any;
    width?: any;
}>> & string;
export declare const RecommendedTag: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const LoadMoreButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, never>> & string;
export declare const toolTipTheme: {
    padding: string;
    fontWeight: number;
    fontSize: string;
    backgroundColor: string;
};
export declare const AnimatedCoin: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, {
    bottom?: string;
    right?: string;
    left?: string;
    isUp?: boolean;
}>> & string;
export declare const GoldCoin: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, {
    bottom: string;
    left: string;
}>> & string;
export declare const FormikForm: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<Omit<Omit<import("react").DetailedHTMLProps<import("react").FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "ref"> & import("react").RefAttributes<HTMLFormElement>, "ref"> & {
    ref?: import("react").Ref<HTMLFormElement>;
}, never>> & string & Omit<import("react").ForwardRefExoticComponent<Omit<import("react").DetailedHTMLProps<import("react").FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, "ref"> & import("react").RefAttributes<HTMLFormElement>>, keyof import("react").Component<any, {}, any>>;
export {};
