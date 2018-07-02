import { isLocal } from "../functions/isLocal";

export function getAdminAjaxURL() {
    let adminAjaxURL = "/wp-admin/admin-ajax.php";

    if (isLocal()) {
        adminAjaxURL = "/frnt" + adminAjaxURL;
    }

    return adminAjaxURL;
}
