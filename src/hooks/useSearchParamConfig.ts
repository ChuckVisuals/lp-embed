import { useMemo } from "react"
import { decodeUrlConfig, UrlConfig } from "../urlconfig"

export const useSearchParamConfig = (configText?: string): { config?: UrlConfig; error?: Error } => {
    return useMemo(() => {
        if (configText == null) {
            return {}
        }

        try {
            return { config: decodeUrlConfig(configText) }
        } catch (error) {
            return { error: error as Error }
        }
    }, [configText])
}
