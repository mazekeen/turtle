<?php

namespace App\Document\Log;

use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;

/**
 * @MongoDB\EmbeddedDocument
 */
class Activity
{
    /**
     * @MongoDB\Field(type="int")
     * @Groups({"log_create", "log_list"})
     * @Assert\NotBlank()
     *
     * @var int
     */
    private $id;

    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }
}
