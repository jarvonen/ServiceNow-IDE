import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "fc93ebff26e34f8990fd03ac5d9efffd"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "959cfb2589d84103ac6f4a42d8e85828"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "5b886c4ab90746ecaad5bf563337f16e"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "2683026ab6974128b441bfdde8d8527a"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "452d019cf3b44c4aa45e09882b71194c",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "7c7b5a7266b34ddca8bf850ec6ea0209",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "32d4823200e945e09236ca007e423a41",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
