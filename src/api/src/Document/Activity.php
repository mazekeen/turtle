<?php

namespace App\Document;

use App\Document\Activity\User;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @MongoDB\Document
 */
class Activity
{
    /**
     * @MongoDB\Id(strategy="INCREMENT")
     * @Groups({"activity_create", "activity_list", "activity_find"})
     *
     * @var int
     */
    private $id;

    /**
     * @MongoDB\Field(type="string")
     * @Groups({"activity_create", "activity_list", "activity_find"})
     * @Assert\NotBlank()
     * @Assert\Length(min=3, max=32)
     *
     * @var string
     */
    private $name;

    /**
     * @MongoDB\EmbedOne(targetDocument=User::class)
     * @Assert\NotBlank()
     * @Assert\Valid()
     *
     * @var User
     */
    private $user;

    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getUser(): User
    {
        return $this->user;
    }

    public function setUser(User $user): self
    {
        $this->user = $user;

        return $this;
    }
}
