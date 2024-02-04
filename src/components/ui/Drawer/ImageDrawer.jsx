import { Drawer } from "vaul";

export const ImageDrawer = ({ children }) => {
  //fix import issues and css variable issue
  return (
    <Drawer.Root>
      <Drawer.Trigger>{children}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Content>
          <p>Content</p>
        </Drawer.Content>
        <Drawer.Overlay />
      </Drawer.Portal>
    </Drawer.Root>
  );
};
