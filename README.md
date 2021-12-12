# Space Management Frontends

Frontends for the [Space Management]() tool built for KA-Huis.

## Setup

### Docker setup

Run the setup script first:

```bash
./setup.sh
```

This will setup the docker containers.

Then you can access the Nodejs service and run the compiler (Laravel Mix).

```bash
docker-comppose exec nodejs sh
```

Then you can run any command, for example:

```bash
yarn dev

yarn watch
```

## Credits

* **Joey Vonck** - _Creator_ - [joeyvonck](https://github.com/joeyvonck)

See also the list of [contributors](https://github.com/space-management-frontends/graphs/contributors) who participated in this project.

## Changelog

Please see [CHANGELOG](CHANGELOG-2.0.md) for more information on what has changed recently.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
