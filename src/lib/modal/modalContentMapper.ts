// utils/modalContentMapper.ts
import { lazy } from "react";
import type { ModalType } from "@/store/slices/modalSlice";
import type { DataSourceId } from "@/store/slices/dataSourcesSlice";

// Define the content map with proper typing
type ContentMap = {
  [K in DataSourceId]?: Partial<
    Record<ModalType, React.LazyExoticComponent<React.ComponentType>>
  >;
};

// Lazy load all possible components
const contentMap: ContentMap = {
  aws: {
    configure: lazy(() => import("@/components/data-sources/aws/Configure")),
    logs: lazy(() => import("@/components/data-sources/aws/Logs")),
    metrics: lazy(() => import("@/components/data-sources/aws/Metrics")),
  },
  azure: {
    configure: lazy(() => import("@/components/data-sources/azure/Configure")),
    logs: lazy(() => import("@/components/data-sources/azure/Logs")),
    metrics: lazy(() => import("@/components/data-sources/azure/Metrics")),
  },
  gcp: {
    configure: lazy(() => import("@/components/data-sources/gcp/Configure")),
    /*  logs: lazy(() => import("@/components/data-sources/gcp/Logs")),
    metrics: lazy(() => import("@/components/data-sources/gcp/Metrics")), */
  },
  /* postgres: {
    configure: lazy(
      () => import("@/components/data-sources/postgres/Configuration")
    ),
    logs: lazy(() => import("@/components/data-sources/postgres/Logs")),
    metrics: lazy(() => import("@/components/data-sources/postgres/Metrics")),
  },
  api: {
    configure: lazy(
      () => import("@/components/data-sources/api/Configuration")
    ),
    logs: lazy(() => import("@/components/data-sources/api/Logs")),
    metrics: lazy(() => import("@/components/data-sources/api/Metrics")),
  }, */
};

export const getModalContent = (
  dataSourceId: DataSourceId,
  modalType: ModalType
): React.LazyExoticComponent<React.ComponentType> | null => {
  // Handle special cases
  if (dataSourceId === "dashboard" || dataSourceId === "add-new") {
    return null;
  }

  const dataSourceContent = contentMap[dataSourceId];
  if (!dataSourceContent) {
    return null;
  }

  return dataSourceContent[modalType] || null;
};
