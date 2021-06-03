import React, {Suspense, useEffect, useState} from "react";
import {Menu} from "components/menu/menu";
import {Chat} from "modules/chat/chat";
import {Outlet} from "react-router-dom";
import userManager from "../utils/user-manager";
import { useErrorHandler} from "react-error-boundary";
import { FullPageLoading} from "components/library";

const BasicLayout=()=> {
    const [ loading, setLoading ] = useState(true);
    const handleError = useErrorHandler();

    useEffect(()=> {
        userManager.getUser().then(function (user) {
            if (!user) {
                userManager.signinRedirect().then(function () {

                }).catch(function (error) {
                    handleError(error);
                });
            } else {
                setLoading(false);
            }
        });
    },[loading])

  return  loading ? (<FullPageLoading/>):(<div className="layout-wrapper d-lg-flex"><Menu/><Suspense fallback={<FullPageLoading/>}><Outlet/></Suspense><Chat/></div>);

}

export  default  BasicLayout;