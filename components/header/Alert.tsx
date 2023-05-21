import Button from "$store/components/ui/Button.tsx";
import Icon from "$store/components/ui/Icon.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "preact/hooks";

export interface Props {
  alerts: string[];
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
  interval?: number;
  canDismiss: boolean;
}

function Alert({ alerts = [], interval = 5, canDismiss = false }: Props) {
  const id = useId();

  return (
    <div id={id}>
      <Slider class="carousel carousel-center bg-accent text-accent-content gap-6 scrollbar-none">
        {alerts.map((alert, index) => (
          <Slider.Item index={index} class="carousel-item">
            <span class="text-sm flex justify-center items-center w-screen h-[38px]">
              {alert}
            </span>
          </Slider.Item>
        ))}
      </Slider>

      {canDismiss && (
        <button class="btn-ghost no-animation absolute top-0 right-0 h-[38px] pl-4 pr-4">
          <Icon id="XMark" size={14} strokeWidth={3}></Icon>
        </button>
      )}

      <SliderJS rootId={id} interval={interval && interval * 1e3} />
    </div>
  );
}

export default Alert;
