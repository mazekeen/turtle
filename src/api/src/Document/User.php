<?php

namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\Document
 */
class User
{
    /**
     * @MongoDB\Id(strategy="INCREMENT")
     *
     * @var int
     */
    private $id;

    /**
     * @MongoDB\Field(type="string")
     *
     * @var string
     */
    private $name;

    /**
     * @MongoDB\Field(type="string")
     *
     * @var string
     */
    private $email;

    /**
     * @MongoDB\Field(type="string")
     *
     * @var string
     */
    private $password;

    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getEmail(): string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }
}
