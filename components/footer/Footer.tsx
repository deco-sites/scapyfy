import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Logo from "$store/components/Logo.tsx";
import type { ComponentChildren } from "preact";

export type IconItem = { icon: AvailableIcons };
export type StringItem = {
  label: string;
  href: string;
};
export type LogoItem = {
  width: string;
  color: string;
};

export type Item = StringItem | IconItem | LogoItem;

export type Section = {
  label?: string;
  children: Item[];
};

const isIcon = (item: Item): item is IconItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.icon === "string";

const isLogo = (item: Item): item is LogoItem =>
  // deno-lint-ignore no-explicit-any
  typeof (item as any)?.width === "string";

function SectionItem({ item }: { item: Item }) {
  return (
    <span class="text-white">
      {isIcon(item)
        ? (
          <div class="border border-transparent bg-gray-500 rounded-full p-2">
            <Icon
              id={item.icon}
              width={30}
              height={30}
              strokeWidth={2}
              fill={"white"}
            />
          </div>
        )
        : isLogo(item)
        ? <Logo width={item.width} color={item.color} />
        : (
          <a href={item.href}>
            {item.label}
          </a>
        )}
    </span>
  );
}

function FooterContainer(
  { children, class: _class = "" }: {
    class?: string;
    children: ComponentChildren;
  },
) {
  return <div class={`py-6 px-4 sm:py-12 sm:px-0 ${_class}`}>{children}</div>;
}

export interface Props {
  sections?: Section[];
}

function Footer({ sections = [] }: Props) {
  return (
    <footer class="w-full bg-black flex flex-col divide-y divide-primary-content">
      <div>
        <div class="container w-full flex flex-col items-center divide-y divide-primary-content">
          <FooterContainer>
            {/* Desktop view */}
            <ul class="hidden sm:flex flex-row gap-20">
              {sections.map((section) => (
                <li>
                  <div>
                    {section.label
                      ? (
                        <span class="font-black space text-xs text-gray-400 tracking-wider uppercase">
                          {section.label}
                        </span>
                      )
                      : <></>}

                    <ul
                      class={`flex ${
                        isIcon(section.children[0]) ? "flex-row" : "flex-col"
                      } gap-2 pt-2 flex-wrap`}
                    >
                      {section.children.map((item) => (
                        <li>
                          <SectionItem item={item} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>

            {/* Mobile view */}
            <ul class="flex flex-col sm:hidden sm:flex-row gap-4">
              {sections.map((section) => (
                <li>
                  <span class="text-primary-content">
                    <details>
                      <summary>
                        {section.label}
                      </summary>

                      <ul
                        class={`flex ${
                          isIcon(section.children[0]) ? "flex-row" : "flex-col"
                        } gap-2 px-2 pt-2`}
                      >
                        {section.children.map((item) => (
                          <li>
                            <SectionItem item={item} />
                          </li>
                        ))}
                      </ul>
                    </details>
                  </span>
                </li>
              ))}
            </ul>
          </FooterContainer>
          <FooterContainer class="flex justify-between w-full text-xs text-gray-400">
            <span class="flex items-center gap-4 text-primary-content font-medium">
              <span>
                <a
                  href="https://www.deco.cx"
                  aria-label="powered by https://www.deco.cx"
                >
                  Legal
                </a>
              </span>
              <span>
                <a
                  href="https://www.deco.cx"
                  aria-label="powered by https://www.deco.cx"
                >
                  Centro de Privacidade
                </a>
              </span>
            </span>

            <span>
              © 2023 Spotify AB
            </span>
          </FooterContainer>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
