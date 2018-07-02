import "core-js/es6/promise";
import { initComponent } from "./initComponent";

export function initComponents(context = document) {
    const components = Array.prototype.slice.call(
        context.querySelectorAll("[data-component]")
    );

    components.forEach(elem => {
        const components = elem.getAttribute("data-component").split(",");

        components.forEach(component => {
            component = component.replace(/\s/g, "");

            require.ensure([], () =>
                initComponent(
                    require(`../components/${component}`),
                    elem,
                    component
                )
            );
        });
    });
}
