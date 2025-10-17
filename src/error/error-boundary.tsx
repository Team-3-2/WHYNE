"use client";

import { Icon } from "@/components";
import { Component } from "react";
import { toast } from "react-toastify";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

const ALERT_ERROR_ICON = <Icon icon="AlertIcon" color="red300" size="md" />;

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  /**
   * 오류가 발생한 후 대체 UI를 렌더링하기 위해 state를 업데이트 합니다.
   */
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  /**
   * 오류 정보를 기록하는 데 사용합니다. side effect를 수행할 수 있습니다.
   * @param error
   * @param errorInfo
   */
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    toast.error(error.message, { icon: ALERT_ERROR_ICON });
  }

  /**
   * @returns props로 받은 대체 UI 또는 자식 컴포넌트를 렌더링합니다.
   */
  render(): React.ReactNode {
    return this.props.children;
  }
}

export default ErrorBoundary;
