import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";

export interface Feature {
  /**
   * @description Image src
   */
  icon: AvailableIcons;
  /**
   * @description Title
   */
  title: string;
  /**
   * @description Description and Image alt text
   */
  description: string;
}

export interface Props {
  features: Feature[];
  title?: string;
}

function FeatureHighlights(
  { features, title }: Props,
) {
  return (
    <div class="container min-h-[280px] p-6 sm:px-0 sm:py-10">
      <h2 class="text-center">
        <span class="font-medium text-2xl">{title}</span>
      </h2>
      <div class="border-base-200 border border-solid mt-10">
        <div class="flex flex-col justify-evenly divide-y divide-base-200 mx-6 sm:flex-row sm:divide-y-0 sm:divide-x sm:mx-0 sm:my-10">
          {features.map(({ icon: id = "Truck", title, description }) => (
            <div class="flex flex-row gap-4 py-6 sm:flex-col sm:py-0 sm:px-8">
              <div className="flex flex-row justify-center">
                <Icon
                  id={id}
                  width={40}
                  height={40}
                  strokeWidth={2}
                />
              </div>
              <div class="flex flex-col gap-2">
                <span class="font-medium text-xl">{title}</span>
                <span class="text-sm">{description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureHighlights;
