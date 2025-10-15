/**
 * 스켈레톤 컴포넌트
 * @author yeonsu
 * @param w : 스켈레톤의 너비
 * @param h : 스켈레톤의 높이
 * @param radius : 스켈레톤의 border-radius (기본값: 8)
 * @param wUnit : 너비 단위 (기본값: px)
 * @param style : 추가 스타일링을 위한 style 객체
 */

interface SkeletonProps {
  w: number;
  h: number;
  radius?: number;
  wUnit?: string;
  style?: React.CSSProperties;
}

const Skeleton = ({ w, h, wUnit = "px", radius = 8, style }: SkeletonProps) => {
  const size: React.CSSProperties = {
    width: `${w}${wUnit}`,
    height: `${h}px`,
    borderRadius: `${radius}px`,
  };

  return <div className="skeleton-gradient" style={{ ...size, ...style }} />;
};

export default Skeleton;
